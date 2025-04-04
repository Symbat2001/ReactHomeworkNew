import React, { useState } from 'react';

export default function ValidationHW() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(0)
  const [reason, setReason] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (name.trim().length < 3) {
      setError("Аты-жонин дурыс енгизиниз")
      return
    }

    if (!isValidEmail(email)) {
      setError("Email дурыс форматта болуы керек.")
      return
    }

    if (comment.length < 20) {
      setError("Пикир кеминде 20 танбадан туруы керек.")
      return
    }

    if (rating === 0) {
      setError("Багалауды тандаңыз (1-ден 5-ке дейин).")
      return
    }

    if (rating < 3 && reason.trim() === '') {
      setError("Не себепти томен багалаганынызды жазыныз.")
      return
    }

    setSuccess("Рахмет, сиздин пикириниз манызды!")
  }

  return (
    <div>
      <h1>Кери Байланыс Формасы</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Аты-жони:</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name surname'
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />
        </div>
        <div>
          <label>Пикириниз:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Enter your comment...'
          />
        </div>
        <div className='stars'>
          <label>Багалау:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              style={{
                cursor: 'pointer',
                fontSize: '24px',
                color: star <= rating ? 'gold' : 'gray'
              }}
            >
              ⭐
            </span>
          ))}
        </div>

        {rating > 0 && rating < 3 && (
          <div>
            <label>Неге томен багаладыныз?</label>
            <input 
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder='Себебин жазыныз...'
            />
          </div>
        )}

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        
        <button type="submit">Жиберу</button>
      </form>
    </div>
  )
}test
