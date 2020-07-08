import React from 'react';
import { Link } from 'react-router-dom';

const reader = new FileReader();
const file = e.currentTarget.files[0];
reader.onloadend = () =>
  this.setState({ imageUrl: reader.result, imageFile: file });

if (file) {
  reader.readAsDataURL(file);
} else {
  this.setState({ imageUrl: "", imageFile: null });
}

handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('post[title]', this.state.title);
  if (this.state.photoFile) {

    formData.append('post[photo]', this.state.photoFile);
  }
  $.ajax({
    url: '/api/products',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
}