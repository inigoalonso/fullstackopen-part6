import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postAnecdote } from "../requests"
import { useNotificationDispatch } from "../NotificationContext"
import { notificationHandler } from "../utils/notification_helper"

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const notificationDispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: postAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"])
      queryClient.setQueryData(["anecdotes"], anecdotes.concat(newAnecdote))
      notificationHandler(
        notificationDispatch,
        `new anecdote '${newAnecdote.content}' created`
      )
    },
    onError: (error) => {
      notificationHandler(notificationDispatch, error.response.data.error)
    },
  })
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
