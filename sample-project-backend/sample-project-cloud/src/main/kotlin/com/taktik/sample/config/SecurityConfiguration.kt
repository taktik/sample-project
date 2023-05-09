package com.taktik.sample.config

import jakarta.servlet.http.HttpServletResponse
import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.provisioning.InMemoryUserDetailsManager
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

@Configuration
@EnableWebSecurity
class SecurityConfiguration(
    private val sampleProperties: SampleProperties,
    private val authenticationManagerBuilder: AuthenticationManagerBuilder,
) {
    @Bean
    fun userDetailsService(): InMemoryUserDetailsManager {
        val taktikUser: UserDetails = User.withUsername(sampleProperties.adminUsername)
            .password(passwordEncoder().encode(sampleProperties.adminPassword))
            .roles("ADMIN")
            .build()
        return InMemoryUserDetailsManager(taktikUser)
    }

    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .cors().and()
            .csrf()
            .disable()
            .authorizeHttpRequests()
            .requestMatchers(EndpointRequest.to("info", "health")).permitAll()
            .requestMatchers(EndpointRequest.toLinks()).permitAll() // to list endpoints
            .requestMatchers(EndpointRequest.toAnyEndpoint()).hasRole("ACTUATOR")
            .requestMatchers("/login*").permitAll()
            .requestMatchers("/error").permitAll() // workaround for 401->400 bug
            .requestMatchers(HttpMethod.GET, "/api").permitAll()
            .anyRequest().authenticated() //.hasRole("ADMIN")
            .and().httpBasic()
            .and().formLogin().loginPage("/login")
            .successHandler { _, response, _ ->
                response.status = HttpServletResponse.SC_OK
            }.permitAll()
            .and().exceptionHandling().authenticationEntryPoint { _, response, _ ->
                response.status = HttpServletResponse.SC_FORBIDDEN
                response.writer.write("Access denied, please log in via the /login page using an account that has sufficient permissions")
            }
            .and().addFilterBefore(
                JsonAuthenticationFilter(authenticationManagerBuilder.orBuild),
                UsernamePasswordAuthenticationFilter::class.java
            )
            .logout().permitAll()
            .and().securityContext().requireExplicitSave(false)

        return http.build()
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}
