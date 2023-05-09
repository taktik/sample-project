package com.taktik.sample.web

import com.taktik.sample.services.SampleService
import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/api")
@Tag(name = "Main Controller", description = "Main API")
class SampleController(
    private val sampleService: SampleService
) {
    val log: Logger = LoggerFactory.getLogger(javaClass)

    @GetMapping("/ok")
    @Operation(
        summary = "Endpoint returning a 200 OK",
        description = "This is just an example endpoint"
    )
    fun ok(): Boolean {
        return true
    }

    @GetMapping
    @Operation(
        summary = "Endpoint returning the input String",
        description = "This is just an example endpoint"
    )
    fun sampleCall(@RequestParam text: String): String {
        return sampleService.sampleCall(text)
    }
}
