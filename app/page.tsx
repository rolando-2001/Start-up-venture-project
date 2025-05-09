import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Search, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%201-atMq9WMseFsPAz9U4NMvI324p6V3pt.png"
              alt="TesisMatch Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">TesisMatch</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-[#1398F9] transition-colors">
              Cómo funciona
            </Link>
            <Link href="#for-students" className="text-sm font-medium hover:text-[#1398F9] transition-colors">
              Para estudiantes
            </Link>
            <Link href="#for-advisors" className="text-sm font-medium hover:text-[#1398F9] transition-colors">
              Para asesores
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#e6f3ff] to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Encuentra el asesor perfecto para tu tesis</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Conectamos estudiantes con asesores especializados para garantizar el éxito de tu proyecto de tesis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register?type=student">
              <Button size="lg" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                Soy estudiante
              </Button>
            </Link>
            <Link href="/register?type=advisor">
              <Button size="lg" variant="outline">
                Soy asesor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#cce7ff] flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-[#1398F9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Encuentra</h3>
              <p className="text-gray-600">Busca y filtra asesores según tu carrera y tema de tesis.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#cce7ff] flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-[#1398F9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Conecta</h3>
              <p className="text-gray-600">Solicita asesoría y coordina detalles a través del chat.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#cce7ff] flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-[#1398F9]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Completa</h3>
              <p className="text-gray-600">Recibe asesoría por etapas y finaliza tu tesis con éxito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1398F9] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">¿Listo para comenzar tu tesis?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Regístrate hoy y conecta con asesores especializados que te guiarán en cada paso del proceso.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-[#1398F9] hover:bg-gray-100">
              Comenzar ahora <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%201-atMq9WMseFsPAz9U4NMvI324p6V3pt.png"
                alt="TesisMatch Logo"
                className="h-6 w-6"
              />
              <span className="text-xl font-bold">TesisMatch</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} TesisMatch. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
