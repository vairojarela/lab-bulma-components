import React from 'react'

export default function Message(props) {
  return (
    <div>
      <article class="message is-info">
  <div class="message-header">
    <p>Info</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    {props.children}
  </div>
</article>
    </div>
  )
}
