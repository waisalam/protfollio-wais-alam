'use client'

import { useState, useEffect, useCallback } from 'react'

type Submission = {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
  read: boolean
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loginLoading, setLoginLoading] = useState(false)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState<Submission | null>(null)

  const fetchSubmissions = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/contacts')
    if (res.ok) {
      const data = await res.json()
      setSubmissions(data)
    } else if (res.status === 401) {
      setAuthenticated(false)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    // Try fetching — if cookie exists it'll work, otherwise we'll show login
    fetch('/api/admin/contacts').then((res) => {
      if (res.ok) {
        setAuthenticated(true)
        res.json().then(setSubmissions)
      }
    })
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      setAuthenticated(true)
      fetchSubmissions()
    } else {
      setLoginError('Invalid password')
    }
    setLoginLoading(false)
  }

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' })
    setAuthenticated(false)
    setSubmissions([])
    setSelected(null)
  }

  const toggleRead = async (sub: Submission) => {
    await fetch('/api/admin/contacts', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: sub.id, read: !sub.read }),
    })
    setSubmissions((prev) =>
      prev.map((s) => (s.id === sub.id ? { ...s, read: !s.read } : s))
    )
    if (selected?.id === sub.id) setSelected((s) => s && { ...s, read: !s.read })
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <h1 className="text-4xl font-bold tracking-tighter mb-2">ADMIN</h1>
          <p className="text-foreground/60 mb-8 text-sm font-mono">Contact submissions dashboard</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-card border-2 border-foreground focus:outline-none focus:border-primary"
              autoFocus
            />
            {loginError && (
              <p className="text-red-500 text-sm font-mono">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase disabled:opacity-50"
            >
              {loginLoading ? 'CHECKING...' : 'LOGIN'}
            </button>
          </form>
        </div>
      </main>
    )
  }

  const unread = submissions.filter((s) => !s.read).length

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="border-b-2 border-foreground px-6 py-4 flex justify-between items-center sticky top-0 bg-background z-10">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold tracking-tighter">W. ADMIN</span>
          {unread > 0 && (
            <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold">
              {unread} NEW
            </span>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="text-xs font-bold tracking-widest uppercase text-foreground/60 hover:text-foreground"
        >
          LOGOUT
        </button>
      </nav>

      <div className="flex h-[calc(100vh-65px)]">
        {/* Sidebar list */}
        <div className="w-96 border-r-2 border-foreground overflow-y-auto flex-shrink-0">
          {loading ? (
            <div className="p-8 text-foreground/50 font-mono text-sm">Loading...</div>
          ) : submissions.length === 0 ? (
            <div className="p-8 text-foreground/50 font-mono text-sm">No submissions yet.</div>
          ) : (
            submissions.map((sub) => (
              <button
                key={sub.id}
                onClick={() => {
                  setSelected(sub)
                  if (!sub.read) toggleRead(sub)
                }}
                className={`w-full text-left px-6 py-5 border-b border-foreground/20 hover:bg-card transition-colors ${
                  selected?.id === sub.id ? 'bg-card border-l-4 border-l-primary' : ''
                } ${!sub.read ? 'bg-primary/5' : ''}`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-bold text-sm truncate">{sub.name}</span>
                  {!sub.read && (
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                  )}
                </div>
                <p className="text-xs text-foreground/60 truncate mb-1">{sub.subject}</p>
                <p className="text-xs text-foreground/40 font-mono">
                  {new Date(sub.createdAt).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric',
                  })}
                </p>
              </button>
            ))
          )}
        </div>

        {/* Detail pane */}
        <div className="flex-1 overflow-y-auto p-8">
          {selected ? (
            <div className="max-w-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">{selected.subject}</h2>
                <button
                  onClick={() => toggleRead(selected)}
                  className="text-xs font-bold tracking-widest uppercase border border-foreground/30 px-3 py-1.5 hover:bg-card"
                >
                  Mark as {selected.read ? 'UNREAD' : 'READ'}
                </button>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex gap-2">
                  <span className="text-xs font-bold tracking-widest text-foreground/50 w-16 pt-0.5">FROM</span>
                  <span className="font-mono text-sm">{selected.name} &lt;{selected.email}&gt;</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-bold tracking-widest text-foreground/50 w-16 pt-0.5">DATE</span>
                  <span className="font-mono text-sm">
                    {new Date(selected.createdAt).toLocaleString('en-US', {
                      dateStyle: 'full', timeStyle: 'short',
                    })}
                  </span>
                </div>
              </div>

              <div className="border-t-2 border-foreground pt-6">
                <p className="whitespace-pre-wrap leading-relaxed">{selected.message}</p>
              </div>

              <div className="mt-8">
                <a
                  href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm"
                >
                  REPLY VIA EMAIL
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-foreground/30 font-mono text-sm">
              Select a message to read
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
