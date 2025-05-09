import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft } from "lucide-react"

export default function Login() {
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
              <CardTitle>Iniciar sesión</CardTitle>
              <CardDescription>Ingresa a tu cuenta para continuar</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="student" className="mb-6">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="student">Estudiante</TabsTrigger>
                  <TabsTrigger value="advisor">Asesor</TabsTrigger>
                </TabsList>

                <TabsContent value="student">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="estudiante@ejemplo.com"
                        defaultValue="estudiante@ejemplo.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Contraseña</Label>
                        <Link href="/forgot-password" className="text-sm text-[#1398F9] hover:underline">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                      <Input id="password" type="password" placeholder="••••••••" defaultValue="password123" />
                    </div>

                    <Link href="/dashboard/student">
                      <Button type="button" className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">
                        Iniciar sesión como Estudiante
                      </Button>
                    </Link>
                  </form>
                </TabsContent>

                <TabsContent value="advisor">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-advisor">Correo electrónico</Label>
                      <Input
                        id="email-advisor"
                        type="email"
                        placeholder="asesor@ejemplo.com"
                        defaultValue="asesor@ejemplo.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password-advisor">Contraseña</Label>
                        <Link href="/forgot-password" className="text-sm text-[#1398F9] hover:underline">
                          ¿Olvidaste tu contraseña?
                        </Link>
                      </div>
                      <Input id="password-advisor" type="password" placeholder="••••••••" defaultValue="password123" />
                    </div>

                    <Link href="/dashboard/advisor">
                      <Button type="button" className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">
                        Iniciar sesión como Asesor
                      </Button>
                    </Link>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  ¿No tienes una cuenta?{" "}
                  <Link href="/register" className="text-[#1398F9] hover:underline">
                    Registrarse
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
