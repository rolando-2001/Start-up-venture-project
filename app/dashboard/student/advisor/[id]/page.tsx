import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, User, Settings, LogOut, ArrowLeft, Calendar, Clock, DollarSign, Search } from "lucide-react"

export default function AdvisorProfile() {
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
            <div className="flex items-center">
              <Link href="/dashboard/student/search" className="mr-4">
                <Button variant="ghost" size="sm" className="gap-1">
                  <ArrowLeft className="h-4 w-4" />
                  Volver
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Perfil del Asesor</h1>
            </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column - Advisor info */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarFallback className="text-2xl">MR</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-4">Dr. Miguel Rodríguez</CardTitle>
                    <CardDescription>Especialista en Ingeniería de Sistemas</CardDescription>
                    <div className="flex justify-center items-center mt-2 text-amber-500">
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
                      <span className="ml-1 text-gray-500 text-sm">(24 reseñas)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Especialidades</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-gray-50">
                            Ingeniería de Software
                          </Badge>
                          <Badge variant="outline" className="bg-gray-50">
                            Sistemas de Información
                          </Badge>
                          <Badge variant="outline" className="bg-gray-50">
                            Metodologías Ágiles
                          </Badge>
                          <Badge variant="outline" className="bg-gray-50">
                            Inteligencia Artificial
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Experiencia</h3>
                        <p className="text-sm">10+ años como asesor de tesis</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Idiomas</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-gray-50">
                            Español (Nativo)
                          </Badge>
                          <Badge variant="outline" className="bg-gray-50">
                            Inglés (Avanzado)
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Disponibilidad</h3>
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Lunes a Viernes</span>
                        </div>
                        <div className="flex items-center text-sm mt-1">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>3:00 PM - 8:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col space-y-2">
                    <Button className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contactar
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Link href="/payment/1" className="w-full flex justify-center">
                        Solicitar asesoría
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Right column - Details */}
              <div className="md:col-span-2">
                <Tabs defaultValue="about">
                  <TabsList className="mb-6">
                    <TabsTrigger value="about">Acerca de</TabsTrigger>
                    <TabsTrigger value="packages">Paquetes</TabsTrigger>
                    <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                  </TabsList>

                  <TabsContent value="about">
                    <Card>
                      <CardHeader>
                        <CardTitle>Acerca de</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Biografía</h3>
                          <p className="text-sm text-gray-600">
                            Doctor en Ingeniería de Sistemas con más de 10 años de experiencia en asesoría de tesis. He
                            guiado a más de 50 estudiantes en la culminación exitosa de sus proyectos de investigación.
                            Mi enfoque se centra en metodologías ágiles y prácticas para el desarrollo de
                            investigaciones en el campo de la tecnología.
                          </p>
                          <p className="text-sm text-gray-600 mt-2">
                            Actualmente soy profesor titular en la Universidad Nacional de Ingeniería y consultor para
                            empresas de tecnología. Mi investigación se centra en sistemas de información, inteligencia
                            artificial y metodologías de desarrollo de software.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Formación académica</h3>
                          <ul className="space-y-3">
                            <li className="flex">
                              <div className="mr-4 mt-1">
                                <div className="w-2 h-2 rounded-full text-[#1398F9]"></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Doctor en Ingeniería de Sistemas</p>
                                <p className="text-xs text-gray-500">Universidad Politécnica de Madrid • 2010-2014</p>
                              </div>
                            </li>
                            <li className="flex">
                              <div className="mr-4 mt-1">
                                <div className="w-2 h-2 rounded-full text-[#1398F9]"></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Maestría en Ciencias de la Computación</p>
                                <p className="text-xs text-gray-500">Universidad Nacional de Ingeniería • 2007-2009</p>
                              </div>
                            </li>
                            <li className="flex">
                              <div className="mr-4 mt-1">
                                <div className="w-2 h-2 rounded-full text-[#1398F9]"></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Ingeniería de Sistemas</p>
                                <p className="text-xs text-gray-500">Universidad Nacional de Ingeniería • 2002-2007</p>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Áreas de especialización</h3>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Metodologías de investigación en ingeniería de software</li>
                            <li>• Desarrollo de sistemas de información</li>
                            <li>• Inteligencia artificial aplicada</li>
                            <li>• Análisis de datos para investigación</li>
                            <li>• Metodologías ágiles para proyectos de investigación</li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="packages">
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>Paquete Completo de Tesis</CardTitle>
                              <CardDescription>Asesoría integral para todo el proceso</CardDescription>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-500" />
                              <span className="text-xl font-bold">500</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4">
                            Acompañamiento durante todo el proceso de elaboración de la tesis, desde la definición del
                            tema hasta la defensa final.
                          </p>
                          <h3 className="font-medium mb-2">Incluye:</h3>
                          <ul className="space-y-1 text-sm text-gray-600 mb-4">
                            <li>• Definición y delimitación del tema</li>
                            <li>• Elaboración del plan de tesis</li>
                            <li>• Desarrollo del marco teórico</li>
                            <li>• Diseño metodológico</li>
                            <li>• Análisis de resultados</li>
                            <li>• Redacción y revisión del documento final</li>
                            <li>• Preparación para la defensa</li>
                            <li>• 20 horas de asesoría personalizada</li>
                            <li>• Soporte por chat ilimitado</li>
                          </ul>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Duración estimada: 6 meses</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href="/payment/1" className="w-full">
                            <Button className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">Solicitar este paquete</Button>
                          </Link>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>Paquete por Etapas</CardTitle>
                              <CardDescription>Asesoría para etapas específicas</CardDescription>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-500" />
                              <span className="text-xl font-bold">200</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4">
                            Asesoría enfocada en etapas específicas del proceso de elaboración de la tesis.
                          </p>
                          <h3 className="font-medium mb-2">Opciones disponibles:</h3>
                          <ul className="space-y-1 text-sm text-gray-600 mb-4">
                            <li>• Planteamiento del problema y marco teórico</li>
                            <li>• Diseño metodológico</li>
                            <li>• Análisis de resultados y conclusiones</li>
                            <li>• 8 horas de asesoría personalizada por etapa</li>
                            <li>• Soporte por chat durante la etapa</li>
                          </ul>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Duración estimada: 2-3 meses por etapa</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href="/payment/1" className="w-full">
                            <Button className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">Solicitar este paquete</Button>
                          </Link>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>Sesiones Individuales</CardTitle>
                              <CardDescription>Asesoría por hora</CardDescription>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-500" />
                              <span className="text-xl font-bold">50</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4">
                            Sesiones individuales para resolver dudas específicas o recibir orientación puntual.
                          </p>
                          <h3 className="font-medium mb-2">Incluye:</h3>
                          <ul className="space-y-1 text-sm text-gray-600 mb-4">
                            <li>• 1 hora de asesoría personalizada</li>
                            <li>• Revisión de avances</li>
                            <li>• Recomendaciones específicas</li>
                            <li>• Seguimiento por correo electrónico</li>
                          </ul>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-2" />
                            <span>Sesiones programadas según disponibilidad</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link href="/payment/1" className="w-full">
                            <Button className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">Reservar sesión</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews">
                    <Card>
                      <CardHeader>
                        <CardTitle>Reseñas</CardTitle>
                        <CardDescription>Opiniones de estudiantes que han trabajado con este asesor</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {[1, 2, 3].map((review) => (
                            <div key={review} className="pb-6 border-b last:border-0">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center">
                                  <Avatar className="h-8 w-8 mr-2">
                                    <AvatarFallback>{`E${review}`}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">Estudiante {review}</p>
                                    <p className="text-xs text-gray-500">Ingeniería de Sistemas</p>
                                  </div>
                                </div>
                                <div className="flex items-center text-amber-500">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mb-1">
                                Excelente asesor. Me ayudó a estructurar mi tesis de manera clara y me guió durante todo
                                el proceso. Siempre disponible para resolver dudas y muy profesional.
                              </p>
                              <p className="text-xs text-gray-500">
                                Hace {review} mes{review > 1 ? "es" : ""}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Ver todas las reseñas
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
