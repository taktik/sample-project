package com.taktik.sample.config

import com.fasterxml.jackson.databind.ObjectMapper
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter

class JsonAuthenticationFilter(private val authenticationManager: AuthenticationManager) : UsernamePasswordAuthenticationFilter() {
	override fun attemptAuthentication(request: HttpServletRequest, response: HttpServletResponse): Authentication {
		return if (request.contentType != null && request.contentType.contains("application/json")) {
			val mapper = ObjectMapper()
			val jsonNode = mapper.readTree(request.inputStream)
			val username = jsonNode.get("username").asText()
			val password = jsonNode.get("password").asText()
			val authRequest = UsernamePasswordAuthenticationToken(username, password)
			setDetails(request, authRequest)
			setAuthenticationSuccessHandler { _, resp, _ ->
				resp.status = HttpServletResponse.SC_OK
			}
			authenticationManager.authenticate(authRequest)
		} else {
			super.attemptAuthentication(request, response)
		}
	}
}
