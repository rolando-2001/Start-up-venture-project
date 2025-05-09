"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function Register() {
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") || "student"
  const [userType, setUserType] = useState(initialType)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm">Volver al inicio</span>
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%201-atMq9WMseFsPAz9U4NMvI324p6V3pt.png"
              alt="TesisMatch Logo"
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-2xl font-bold">TesisMatch</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Crear una cuenta</CardTitle>
              <CardDescription>Regístrate para conectar con asesores o estudiantes.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={userType} className="mb-6" onValueChange={setUserType}>
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="student">Estudiante</TabsTrigger>
                  <TabsTrigger value="advisor">Asesor</TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="career">Carrera</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona tu carrera" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Ingeniería</SelectItem>
                          <SelectItem value="business">Administración</SelectItem>
                          <SelectItem value="psychology">Psicología</SelectItem>
                          <SelectItem value="medicine">Medicina</SelectItem>
                          <SelectItem value="law">Derecho</SelectItem>
                          <SelectItem value="education">Educación</SelectItem>
                          <SelectItem value="other">Otra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="thesisTopic">Tema de tesis</Label>
                      <Input id="thesisTopic" placeholder="Describe brevemente tu tema de tesis" />
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]"
                      onClick={() => (window.location.href = "/login")}
                    >
                      Registrarse como estudiante
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="advisor">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nombre</Label>
                        <Input id="firstName" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input id="lastName" placeholder="Tu apellido" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@ejemplo.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Contraseña</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>

                    <div className="space-y-2">
                      <Label>Especialidades</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="engineering" className="rounded text-[#1398F9]" />
                          <label htmlFor="engineering">Ingeniería</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="business" className="rounded text-[#1398F9]" />
                          <label htmlFor="business">Administración</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="psychology" className="rounded text-[#1398F9]" />
                          <label htmlFor="psychology">Psicología</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="medicine" className="rounded text-[#1398F9]" />
                          <label htmlFor="medicine">Medicina</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="law" className="rounded text-[#1398F9]" />
                          <label htmlFor="law">Derecho</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="education" className="rounded text-[#1398F9]" />
                          <label htmlFor="education">Educación</label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografía profesional</Label>
                      <textarea
                        id="bio"
                        className="w-full min-h-[100px] p-2 border rounded-md"
                        placeholder="Describe tu experiencia y especialización"
                      />
                    </div>

                    <Button
                      type="button"
                      className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]"
                      onClick={() => (window.location.href = "/login")}
                    >
                      Registrarse como asesor
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  ¿Ya tienes una cuenta?{" "}
                  <Link href="/login" className="text-[#1398F9] hover:underline">
                    Iniciar sesión
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
