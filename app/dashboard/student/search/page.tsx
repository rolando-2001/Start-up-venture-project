import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, MessageSquare, User, Settings, LogOut, Filter } from "lucide-react"

export default function SearchAdvisors() {
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
                className="flex items-center space-x-2 p-2 rounded-md bg-[#e6f3ff] text-[#1398F9]"
              >
                <Search className="h-5 w-5" />
                <span>Buscar asesores</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/student/messages"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
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
            <h1 className="text-2xl font-bold">Buscar Asesores</h1>
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

        <main className="flex-1 p-6">
          <div className="container mx-auto">
            {/* Search and filters */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Buscar por nombre o especialidad" className="pl-10" />
                  </div>
                </div>
                <div className="w-full md:w-48">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Especialidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="engineering">Ingeniería</SelectItem>
                      <SelectItem value="business">Administración</SelectItem>
                      <SelectItem value="psychology">Psicología</SelectItem>
                      <SelectItem value="medicine">Medicina</SelectItem>
                      <SelectItem value="law">Derecho</SelectItem>
                      <SelectItem value="education">Educación</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-48">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Precio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="low">Menos de $30</SelectItem>
                      <SelectItem value="medium">$30 - $60</SelectItem>
                      <SelectItem value="high">Más de $60</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full md:w-48">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Calificación" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="4plus">4+ estrellas</SelectItem>
                      <SelectItem value="3plus">3+ estrellas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((advisor) => (
                <Card key={advisor}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback>{`A${advisor}`}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">Dr. Nombre Apellido</CardTitle>
                          <div className="text-sm text-gray-500">Especialista en Ingeniería</div>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-1 font-medium">4.9</span>
                        <span className="ml-1 text-gray-500 text-sm">(24)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      Especializado en metodologías de investigación para proyectos de ingeniería de software y sistemas
                      de información.
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      <Badge variant="outline" className="bg-gray-50">
                        Ingeniería de Software
                      </Badge>
                      <Badge variant="outline" className="bg-gray-50">
                        Sistemas de Información
                      </Badge>
                      <Badge variant="outline" className="bg-gray-50">
                        Metodologías Ágiles
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium">Desde $50</span>
                      <span className="mx-1">•</span>
                      <span>Por sesión</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href={`/dashboard/student/advisor/${advisor}`}>
                      <Button variant="outline" size="sm">
                        Ver perfil
                      </Button>
                    </Link>
                    <Link href={`/dashboard/student/advisor/${advisor}`}>
                      <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                        Solicitar asesoría
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="bg-[#e6f3ff] text-[#1398F9] border-emerald-200">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Siguiente
                </Button>
              </nav>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
