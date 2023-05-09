package com.taktik.sample.health

import org.slf4j.LoggerFactory
import org.springframework.boot.actuate.health.Health
import org.springframework.boot.actuate.health.HealthIndicator
import org.springframework.stereotype.Component

@Component
class SampleHealthIndicator : HealthIndicator {
    private val log = LoggerFactory.getLogger(javaClass)

    override fun health(): Health {
        return if (checkHealth()) {
            Health.up()
        } else {
            Health.down()
        }.build()
    }

    private fun checkHealth(): Boolean {
        // Health logic here
        return true
    }
}
