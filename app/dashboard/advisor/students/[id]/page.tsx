import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  MessageSquare,
  User,
  Settings,
  LogOut,
  ArrowLeft,
  Calendar,
  Clock,
  CheckCircle,
  FileText,
  Upload,
  Users,
} from "lucide-react"

export default function StudentDetails() {
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
              <Link href="/dashboard/advisor" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                <User className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/advisor/students"
                className="flex items-center space-x-2 p-2 rounded-md bg-[#e6f3ff] text-[#1398F9]"
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
            <div className="flex items-center">
              <Link href="/dashboard/advisor/students" className="mr-4">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Volver
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Detalle del Estudiante</h1>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column - Student info */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4">Juan Díaz</CardTitle>
                    <CardDescription>Ingeniería de Sistemas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Información de contacto</h3>
                        <div className="text-sm">
                          <p className="flex items-center mb-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-2 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            juan.diaz@ejemplo.com
                          </p>
                          <p className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-2 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            +51 987 654 321
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Tema de tesis</h3>
                        <p className="text-sm">
                          Implementación de un sistema de recomendación basado en IA para plataformas educativas
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Paquete contratado</h3>
                        <p className="text-sm">Paquete completo de tesis</p>
                        <p className="text-xs text-gray-500 mt-1">Inicio: 15 de marzo, 2025</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Progreso general</h3>
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div className="bg-[#1398F9] h-2.5 rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-xs text-gray-500">40%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col space-y-2">
                    <Button className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Enviar mensaje
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Programar sesión
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Right column - Details */}
              <div className="md:col-span-2">
                <Tabs defaultValue="progress">
                  <TabsList className="mb-6">
                    <TabsTrigger value="progress">Progreso</TabsTrigger>
                    <TabsTrigger value="documents">Documentos</TabsTrigger>
                    <TabsTrigger value="sessions">Sesiones</TabsTrigger>
                  </TabsList>

                  <TabsContent value="progress">
                    <Card>
                      <CardHeader>
                        <CardTitle>Progreso de la tesis</CardTitle>
                        <CardDescription>Seguimiento de las etapas del proyecto de tesis</CardDescription>
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
                                <Badge className="ml-2 bg-[#cce7ff] text-[#1398F9] hover:bg-[#cce7ff]">
                                  Completado
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                Definición del problema, objetivos y justificación
                              </p>
                              <p className="text-xs text-gray-400 mt-1">Completado el 20 de abril, 2025</p>
                              <div className="mt-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Ver documento
                                </Button>
                              </div>
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
                                <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-200">
                                  En progreso
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                Revisión de literatura y fundamentos teóricos
                              </p>
                              <p className="text-xs text-gray-400 mt-1">Fecha límite: 15 de mayo, 2025</p>
                              <div className="mt-2 flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <FileText className="h-4 w-4 mr-2" />
                                  Ver borrador
                                </Button>
                                <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                                  Enviar feedback
                                </Button>
                              </div>
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
                      <CardFooter>
                        <Button className="bg-[#1398F9] hover:bg-[#0d7fd8]">Actualizar progreso</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="documents">
                    <Card>
                      <CardHeader>
                        <CardTitle>Documentos</CardTitle>
                        <CardDescription>Archivos compartidos con el estudiante</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            {
                              name: "Planteamiento del problema.docx",
                              date: "20 de abril, 2025",
                              type: "Documento",
                              status: "Aprobado",
                            },
                            {
                              name: "Marco teórico - borrador.docx",
                              date: "5 de mayo, 2025",
                              type: "Documento",
                              status: "En revisión",
                            },
                            {
                              name: "Bibliografía recomendada.pdf",
                              date: "25 de abril, 2025",
                              type: "Recurso",
                              status: "Compartido",
                            },
                            {
                              name: "Feedback - Planteamiento.pdf",
                              date: "22 de abril, 2025",
                              type: "Feedback",
                              status: "Enviado",
                            },
                            {
                              name: "Guía de metodología.pdf",
                              date: "15 de abril, 2025",
                              type: "Recurso",
                              status: "Compartido",
                            },
                          ].map((doc, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-white border rounded-lg"
                            >
                              <div className="flex items-center">
                                <div className="p-2 bg-gray-100 rounded-md mr-3">
                                  <FileText className="h-5 w-5 text-gray-500" />
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{doc.name}</p>
                                  <p className="text-xs text-gray-500">
                                    {doc.date} • {doc.type}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Badge
                                  className={
                                    doc.status === "Aprobado"
                                      ? "bg-[#cce7ff] text-[#1398F9]"
                                      : doc.status === "En revisión"
                                        ? "bg-amber-100 text-amber-800"
                                        : "bg-blue-100 text-blue-800"
                                  }
                                >
                                  {doc.status}
                                </Badge>
                                <Button variant="ghost" size="sm" className="ml-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                          <Upload className="h-4 w-4 mr-2" />
                          Subir documento
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="sessions">
                    <Card>
                      <CardHeader>
                        <CardTitle>Sesiones de asesoría</CardTitle>
                        <CardDescription>Historial y programación de sesiones</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium mb-3">Próximas sesiones</h3>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between p-3 bg-white border rounded-lg">
                                <div className="flex items-center">
                                  <div className="p-2 bg-[#cce7ff] rounded-md mr-3">
                                    <Calendar className="h-5 w-5 text-[#1398F9]" />
                                  </div>
                                  <div>
                                    <p className="font-medium text-sm">Revisión de marco teórico</p>
                                    <p className="text-xs text-gray-500">10 de mayo, 2025 • 4:00 PM - 5:00 PM</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="sm">
                                    Reprogramar
                                  </Button>
                                  <Button size="sm" className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                                    Iniciar
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium mb-3">Sesiones pasadas</h3>
                            <div className="space-y-3">
                              {[
                                {
                                  title: "Revisión de planteamiento",
                                  date: "20 de abril, 2025",
                                  time: "3:00 PM - 4:00 PM",
                                },
                                {
                                  title: "Definición de objetivos",
                                  date: "15 de abril, 2025",
                                  time: "4:00 PM - 5:00 PM",
                                },
                                { title: "Sesión inicial", date: "5 de abril, 2025", time: "3:30 PM - 4:30 PM" },
                              ].map((session, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-3 bg-white border rounded-lg"
                                >
                                  <div className="flex items-center">
                                    <div className="p-2 bg-gray-100 rounded-md mr-3">
                                      <Clock className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-sm">{session.title}</p>
                                      <p className="text-xs text-gray-500">
                                        {session.date} • {session.time}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <Button variant="outline" size="sm">
                                      Ver notas
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="bg-[#1398F9] hover:bg-[#0d7fd8]">
                          <Calendar className="h-4 w-4 mr-2" />
                          Programar nueva sesión
                        </Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
