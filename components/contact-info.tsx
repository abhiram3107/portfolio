import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <Phone className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-sm text-gray-400">Phone</h3>
          <a href="tel:+917337371830" className="text-white hover:text-purple-400 transition-colors">
            +91-7337371830
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <Mail className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-sm text-gray-400">Email</h3>
          <a href="mailto:mukkawarabhiram0@gmail.com" className="text-white hover:text-purple-400 transition-colors">
            mukkawarabhiram0@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <Github className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-sm text-gray-400">GitHub</h3>
          <a
            href="https://github.com/abhiram3107"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            github.com/abhiram3107
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <Linkedin className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-sm text-gray-400">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/abhiram-mukkawar-557426177"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors"
          >
            linkedin.com/in/abhiram-mukkawar-557426177
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <MapPin className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-sm text-gray-400">Location</h3>
          <p className="text-white">Hyderabad, India</p>
        </div>
      </div>
    </div>
  )
}
