export const apiService = {
  async request(
    method: string,
    path: string,
    options: RequestInit & { params?: Record<string, any> } = {}
  ): Promise<any> {
    let fullPath = `https://jsonplaceholder.typicode.com${path}`
    let fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
    }

    if (method === 'GET' && options.params) {
      const query = new URLSearchParams(options.params).toString()
      fullPath += `?${query}`
    } else if (options.params) {
      fetchOptions.body = JSON.stringify(options.params)
    }

    const response = await fetch(fullPath, fetchOptions)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  },

  get(path: string, params?: Record<string, any>, headers?: HeadersInit) {
    return apiService.request('GET',path, { params, headers })
  },

  post(path: string, params?: Record<string, any>, headers?: HeadersInit) {
    return apiService.request('POST', path, { params, headers })
  },

  put(path: string, params?: Record<string, any>, headers?: HeadersInit) {
    return apiService.request('PUT', path, { params, headers })
  },

  delete(path: string, params?: Record<string, any>, headers?: HeadersInit) {
    return apiService.request('DELETE', path, { params, headers })
  }
}