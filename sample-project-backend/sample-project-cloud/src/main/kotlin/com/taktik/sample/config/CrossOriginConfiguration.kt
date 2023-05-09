package com.taktik.sample.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

// Not necessary in prod, but useful for debugging (same with http.cors())
@Configuration
class CrossOriginConfiguration {
	@Bean
	fun corsFilter(): CorsFilter {
		val source = UrlBasedCorsConfigurationSource().apply {
			val config = CorsConfiguration().apply {
				allowCredentials = true
				allowedOriginPatterns = listOf("*")
				allowedHeaders = listOf("*")
				allowedMethods = listOf("*")
			}
			registerCorsConfiguration("/**", config)
		}
		return CorsFilter(source)
	}
}
