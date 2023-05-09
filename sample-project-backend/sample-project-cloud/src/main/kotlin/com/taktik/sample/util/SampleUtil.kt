package com.taktik.sample.util

import com.fasterxml.jackson.databind.ObjectMapper
import com.taktik.sample.model.Example
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Component

@Component
class SampleUtil(private val objectMapper: ObjectMapper) {
    private val log = LoggerFactory.getLogger(javaClass)

    fun fromString(content: String): Example? {
        return try {
            objectMapper.readValue(content, Example::class.java)
        } catch (e: Exception) {
            log.warn("Error while deserializing Example $content", e)
            null
        }
    }
}
