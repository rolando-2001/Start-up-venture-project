import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, MessageSquare, Clock, CheckCircle, User, Settings, LogOut } from "lucide-react"

export default function StudentDashboard() {
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
              <Link
                href="/dashboard/student"
                className="flex items-center space-x-2 p-2 rounded-md bg-[#e6f3ff] text-[#1398F9]"
              >
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
            <h1 className="text-2xl font-bold">Dashboard del Estudiante</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Estado de la tesis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#cce7ff] flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-[#1398F9]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">En progreso</p>
                      <p className="text-sm text-gray-500">Etapa 2 de 5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Asesor actual</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Dr. Miguel Rodríguez</p>
                      <p className="text-sm text-gray-500">Ingeniería de Sistemas</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Próxima entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Marco teórico</p>
                      <p className="text-sm text-gray-500">Fecha límite: 15 de mayo, 2025</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">
                    Ver detalles
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Tabs defaultValue="progress">
              <TabsList className="mb-6">
                <TabsTrigger value="progress">Progreso de la tesis</TabsTrigger>
                <TabsTrigger value="advisors">Asesores recomendados</TabsTrigger>
              </TabsList>

              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Progreso de la tesis</CardTitle>
                    <CardDescription>Seguimiento de las etapas de tu proyecto de tesis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-[#cce7ff] flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-[#1398F9]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Planteamiento del problema</h3>
                            <Badge className="ml-2 bg-[#cce7ff] text-emerald-800 hover:bg-emerald-200">
                              Completado
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Definición del problema, objetivos y justificación
                          </p>
                          <p className="text-xs text-gray-400 mt-1">Completado el 20 de abril, 2025</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-amber-600" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Marco teórico</h3>
                            <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-200">En progreso</Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Revisión de literatura y fundamentos teóricos</p>
                          <p className="text-xs text-gray-400 mt-1">Fecha límite: 15 de mayo, 2025</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Metodología</h3>
                            <Badge className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-200">Pendiente</Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Diseño de la investigación y métodos</p>
                          <p className="text-xs text-gray-400 mt-1">Fecha estimada: 10 de junio, 2025</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Resultados y análisis</h3>
                            <Badge className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-200">Pendiente</Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Presentación y análisis de resultados</p>
                          <p className="text-xs text-gray-400 mt-1">Fecha estimada: 15 de julio, 2025</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-medium">Conclusiones y recomendaciones</h3>
                            <Badge className="ml-2 bg-gray-100 text-gray-800 hover:bg-gray-200">Pendiente</Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Conclusiones finales y recomendaciones</p>
                          <p className="text-xs text-gray-400 mt-1">Fecha estimada: 5 de agosto, 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advisors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((advisor) => (
                    <Card key={advisor}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarFallback>{`A${advisor}`}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">Dr. Nombre Apellido</CardTitle>
                              <CardDescription>Especialista en Ingeniería</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center">
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
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-2">
                          Especializado en metodologías de investigación para proyectos de ingeniería de software y
                          sistemas de información.
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
                        <Button variant="outline" size="sm">
                          Ver perfil
                        </Button>
                        <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                          Solicitar asesoría
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
