class ObservableMap {
	#data

	constructor(mapData) {
		this.#data = new Map(mapData)
	}

	clear() {
		this.#data.clear()
	}

	delete(key) {
		this.#data.delete(key)
	}

	get(key) {
		return this.#data.get(key)
	}

	has(key) {
		return this.#data.has(key)
	}

	set(key, value) {
		this.#data.set(key, value)
		return this
	}

	*entries() {
		yield* this.#data.entries()
	}

	*keys() {
		yield* this.#data.keys()
	}

	*values() {
		yield* this.#data.values()
	}

	*[Symbol.iterator]() {
		yield* this.#data[Symbol.iterator]()
	}

	get size() {
		return this.#data.size
	}
}

export default ObservableMap
