package com.taktik.sample.config

import io.swagger.v3.oas.models.OpenAPI
import io.swagger.v3.oas.models.info.Info
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class SpringDocAutoConfiguration {
	@Bean
	fun openAPI(): OpenAPI {
		return OpenAPI()
			.info(Info().title("Swagger").version("v1.0.0"))
	}
}
