package com.taktik.sample.config

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties("sample")
data class SampleProperties(
    /**
     * Run mode
     */
    val mode: String,

	/**
	 * Username
	 */
	val adminUsername: String = "user",

	/**
	 * Password
	 */
	val adminPassword: String = "xyz"
)

