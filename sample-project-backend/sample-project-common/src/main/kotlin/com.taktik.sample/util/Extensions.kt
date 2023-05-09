package com.taktik.sample.util

import com.taktik.sample.model.Example

fun Example.ex(): Example {
	return Example(this.one, this.two + 1, this.three)
}
