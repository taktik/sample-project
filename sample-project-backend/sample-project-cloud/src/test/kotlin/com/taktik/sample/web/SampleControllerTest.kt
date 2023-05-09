package com.taktik.sample.web

import com.fasterxml.jackson.databind.ObjectMapper
import com.taktik.sample.config.SampleProperties
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.test.context.ActiveProfiles
import java.util.*

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
class SampleControllerTest {
    @Autowired
    lateinit var restTemplate: TestRestTemplate

    @Autowired
    lateinit var sampleProperties: SampleProperties

    @Autowired
    lateinit var objectMapper: ObjectMapper

    @Test
    fun testOk() {
        assertThat(callOk()).isTrue
    }

    private fun callOk(): Boolean {
        return this.restTemplate.basic().getForEntity("/api/ok", Boolean::class.java).body == true
    }

    private fun TestRestTemplate.basic(): TestRestTemplate =
        this.withBasicAuth(sampleProperties.adminUsername, sampleProperties.adminPassword)
}
