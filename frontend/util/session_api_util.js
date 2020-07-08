export const signup = user => {
	return (
		$.ajax({
			url: '/api/user', 
			method: 'POST', 
			data: { user }
		})
	)
}

export const login = user => {
	return (
		$.ajax({
			url: '/api/session', 
			method: 'POST',  
			data: { user }
		})

	) 
}

export const logout = () => {
	return (
		$.ajax({
			url: '/api/session',
			method: 'DELETE' 
		})
	)
}

export const fetchUsers = () => {
	return ( 
		$.ajax({
			url: '/api/users',
			method: 'GET',
		})
	)
}

export const fetchProducts = () => {
	return (
		$.ajax({
		url: '/api/products',
		method: 'POST',
		data: formData,
		contentType: false,
		processData: false
		})
	)
}