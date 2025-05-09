import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, User, Settings, LogOut, Users, Calendar, DollarSign } from "lucide-react"

export default function AdvisorDashboard() {
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
                href="/dashboard/advisor"
                className="flex items-center space-x-2 p-2 rounded-md bg-[#e6f3ff] text-[#1398F9]"
              >
                <User className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/advisor/students"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <Users className="h-5 w-5" />
                <span>Estudiantes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/advisor/messages"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Mensajes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/advisor/calendar"
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              >
                <Calendar className="h-5 w-5" />
                <span>Calendario</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/advisor/profile"
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
            <h1 className="text-2xl font-bold">Dashboard del Asesor</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <span className="font-medium">Dr. Miguel Rodríguez</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Estudiantes activos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#cce7ff] flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-[#1398F9]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">5</p>
                      <p className="text-sm text-gray-500">Estudiantes en asesoría</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Próxima sesión</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                      <Calendar className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Juan Díaz</p>
                      <p className="text-sm text-gray-500">Hoy, 4:00 PM</p>
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
                  <CardTitle className="text-lg">Ingresos del mes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#cce7ff] flex items-center justify-center mr-4">
                      <DollarSign className="h-6 w-6 text-[#1398F9]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">$750</p>
                      <p className="text-sm text-gray-500">Mayo 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="students">
              <TabsList className="mb-6">
                <TabsTrigger value="students">Estudiantes activos</TabsTrigger>
                <TabsTrigger value="requests">Solicitudes pendientes</TabsTrigger>
              </TabsList>

              <TabsContent value="students">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4, 5].map((student) => (
                    <Card key={student}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarFallback>{`E${student}`}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">Estudiante {student}</CardTitle>
                              <CardDescription>Ingeniería de Sistemas</CardDescription>
                            </div>
                          </div>
                          <Badge
                            className={
                              student % 2 === 0
                                ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
                                : "bg-[#cce7ff] text-[#1398F9] hover:bg-[#d6eeff]"
                            }
                          >
                            {student % 2 === 0 ? "En progreso" : "Al día"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium">Tema de tesis</p>
                            <p className="text-sm text-gray-600">
                              Implementación de un sistema de recomendación basado en IA para plataformas educativas
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Etapa actual</p>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div
                                  className="bg-[#1398F9] h-2.5 rounded-full"
                                  style={{ width: `${(student * 20) % 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500">{(student * 20) % 100}%</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {student % 3 === 0
                                ? "Marco teórico"
                                : student % 3 === 1
                                  ? "Metodología"
                                  : "Análisis de resultados"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Próxima entrega</p>
                            <p className="text-xs text-gray-500">15 de mayo, 2025</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Mensaje
                        </Button>
                        <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                          <Link href={`/dashboard/advisor/students/${student}`}>Ver detalles</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="requests">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((request) => (
                    <Card key={request}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarFallback>{`R${request}`}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">Solicitante {request}</CardTitle>
                              <CardDescription>Ingeniería de Sistemas</CardDescription>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Nueva solicitud</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium">Tema de tesis</p>
                            <p className="text-sm text-gray-600">
                              Desarrollo de una plataforma de aprendizaje adaptativo utilizando técnicas de machine
                              learning
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Paquete solicitado</p>
                            <p className="text-sm text-gray-600">Paquete completo de tesis</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Fecha de solicitud</p>
                            <p className="text-xs text-gray-500">8 de mayo, 2025</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Rechazar
                        </Button>
                        <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                          Aceptar
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
