import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t pt-12 pb-6 text-sm text-muted-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">About GameFroge</h3>
          <p className="text-muted-foreground">
            GameFroge is your go-to platform for discovering free-to-play games. Browse, explore, and build your wishlist!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/games" className="hover:underline">All Games</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/watch-list" className="hover:underline">Wishlist</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li>Email: <a href="mailto:ahmed.ashraf0221@gmail.com">ahmed.ashraf0221@gmail.com</a></li>
            <li>Phone:+20 100 687 7585</li>
            <li>Location: Cairo, Egypt</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-2">Follow me</h3>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ahmed-ashraf-0221/" className="hover:underline" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} GameFroge. All rights reserved.
      </div>
    </footer>
  )
}
