package com.taktik.sample.config

import com.hazelcast.config.MapConfig
import com.hazelcast.core.HazelcastInstance
import com.hazelcast.map.IMap
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class HazelcastConfiguration {

    @Bean
    fun exampleMap(hazelcastInstance: HazelcastInstance): IMap<String, Int> {
        val mapName = "exampleMap"
        val config = hazelcastInstance.config
        config.addMapConfig(MapConfig(mapName).setTimeToLiveSeconds(30))
        return hazelcastInstance.getMap(mapName)
    }
}
