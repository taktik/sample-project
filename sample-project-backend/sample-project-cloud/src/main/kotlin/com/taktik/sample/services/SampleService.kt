package com.taktik.sample.services

import com.taktik.sample.config.SampleProperties
import org.slf4j.LoggerFactory
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import java.time.Instant

@Service
class SampleService(
    private val sampleProperties: SampleProperties
) {
    private val log = LoggerFactory.getLogger(javaClass)

    var lastRefresh: Instant = Instant.EPOCH

    @Scheduled(
        initialDelayString = "\${sample.refresh.initial:5000}",
        fixedDelayString = "\${sample.refresh.delay:600000}"
    )
    fun sampleRefresh() {
        try {
            // Logic here
            log.info("Refreshed in ${sampleProperties.mode} mode")
            lastRefresh = Instant.now()

        } catch (e: Exception) {
            log.warn("Failed to refresh", e)
        }
    }

    fun sampleCall(example: String): String {
        log.info("sampleCall: $example")
        return example
    }
}
