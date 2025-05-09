import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, User, Settings, LogOut, Send, Search } from "lucide-react"

export default function Messages() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%201-atMq9WMseFsPAz9U4NMvI324p6V3pt.png"
              alt="TesisMatch Logo"
              className="h-6 w-6"
            />
            <span className="text-xl font-bold">TesisMatch</span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard/student" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                <User className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/student/search"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <Search className="h-5 w-5" />
                <span>Buscar asesores</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/student/messages"
                className="flex items-center space-x-2 p-2 rounded-md bg-[#e6f3ff] text-[#1398F9]"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Mensajes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/student/profile"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <Settings className="h-5 w-5" />
                <span>Mi perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-5 w-5 mr-2" />
            Cerrar sesión
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mensajes</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="font-medium">Juan Díaz</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Contacts list */}
          <div className="w-full md:w-80 bg-white border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Buscar conversaciones" className="pl-10" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-12rem)]">
              {[1, 2, 3, 4, 5].map((contact, index) => (
                <div
                  key={contact}
                  className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${index === 0 ? "bg-[#e6f3ff]" : ""}`}
                >
                  <div className="flex items-start">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarFallback>{`A${contact}`}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-medium truncate">Dr. Miguel Rodríguez</h3>
                        <span className="text-xs text-gray-500">10:30 AM</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {index === 0
                          ? "Claro, podemos revisar tu avance mañana a las 4pm."
                          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      {index === 0 && (
                        <span className="inline-block bg-[#cce7ff] text-[#1398F9] text-xs px-2 py-0.5 rounded-full mt-1">
                          Nuevo
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="hidden md:flex flex-1 flex-col bg-gray-50">
            <div className="p-4 bg-white border-b flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">Dr. Miguel Rodríguez</h3>
                <p className="text-xs text-gray-500">En línea</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {/* Received message */}
                <div className="flex items-end">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm max-w-[80%]">
                    <p className="text-sm">Hola Juan, ¿cómo va el avance de tu marco teórico?</p>
                    <p className="text-xs text-gray-500 mt-1">10:15 AM</p>
                  </div>
                </div>

                {/* Sent message */}
                <div className="flex items-end justify-end">
                  <div className="bg-[#1398F9] text-white p-3 rounded-lg rounded-br-none shadow-sm max-w-[80%]">
                    <p className="text-sm">
                      Hola Dr. Rodríguez, estoy avanzando bien. Ya tengo la primera parte lista, pero tengo algunas
                      dudas sobre las referencias.
                    </p>
                    <p className="text-xs text-[#cce7ff] mt-1">10:20 AM</p>
                  </div>
                </div>

                {/* Received message */}
                <div className="flex items-end">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm max-w-[80%]">
                    <p className="text-sm">
                      Perfecto, podemos revisar eso en detalle. ¿Te parece bien una sesión mañana a las 4pm?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">10:25 AM</p>
                  </div>
                </div>

                {/* Sent message */}
                <div className="flex items-end justify-end">
                  <div className="bg-[#1398F9] text-white p-3 rounded-lg rounded-br-none shadow-sm max-w-[80%]">
                    <p className="text-sm">
                      Sí, me parece perfecto. ¿Podríamos también revisar la estructura del capítulo 2?
                    </p>
                    <p className="text-xs text-[#cce7ff] mt-1">10:28 AM</p>
                  </div>
                </div>

                {/* Received message */}
                <div className="flex items-end">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div className="bg-white p-3 rounded-lg rounded-bl-none shadow-sm max-w-[80%]">
                    <p className="text-sm">Claro, podemos revisar tu avance mañana a las 4pm.</p>
                    <p className="text-xs text-gray-500 mt-1">10:30 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t">
              <div className="flex items-center">
                <Input placeholder="Escribe un mensaje..." className="flex-1 mr-2" />
                <Button size="icon" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Empty state for mobile */}
          <div className="flex-1 flex items-center justify-center md:hidden">
            <div className="text-center p-4">
              <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-medium text-gray-700 mb-1">Tus mensajes</h3>
              <p className="text-sm text-gray-500">Selecciona una conversación para ver los mensajes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
