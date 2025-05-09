import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CreditCard } from "lucide-react"

export default function Payment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/dashboard/student" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm">Volver al dashboard</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-removebg-preview%201-atMq9WMseFsPAz9U4NMvI324p6V3pt.png"
              alt="TesisMatch Logo"
              className="h-10 w-auto mr-2"
            />
            <h1 className="text-2xl font-bold text-[#1398F9]">TesisMatch</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Payment form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Información de pago</CardTitle>
                  <CardDescription>Complete los detalles para procesar su pago</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Método de pago</h3>
                    <RadioGroup defaultValue="card" className="space-y-3">
                      <div className="flex items-center space-x-3 border rounded-md p-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center cursor-pointer">
                          <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                          <span>Tarjeta de crédito o débito</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 border rounded-md p-3">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                            <path
                              fill="#002C8A"
                              d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"
                            />
                            <path
                              fill="#009BE1"
                              d="M23.495 7.695c.416 2.707-.421 4.62-1.649 6.208-1.809 2.345-4.946 3.332-8.998 3.332h-.657c-.524 0-.968.382-1.05.9l-1.12 7.106c-.066.42-.446.759-.87.759H4.88a.641.641 0 0 1-.633-.74l1.099-6.955v-.001c.066-.42.446-.76.87-.76h2.48c3.711 0 6.628-.844 8.412-2.42.79-.698 1.438-1.554 1.921-2.571a8.69 8.69 0 0 0 .756-1.861c.674-2.223.19-4.553-1.425-6.152l-.239-.209c.316.886.483 1.892.483 3.016 0 .19-.011.375-.027.56z"
                            />
                          </svg>
                          <span>PayPal</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium mb-3">Detalles de la tarjeta</h3>
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                      <Input id="cardName" placeholder="Nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número de tarjeta</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Fecha de expiración</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium mb-3">Información de facturación</h3>
                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Input id="address" placeholder="Calle, número, etc." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" placeholder="Ciudad" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Código postal</Label>
                        <Input id="postalCode" placeholder="12345" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">País</Label>
                      <Input id="country" placeholder="País" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/dashboard/student" className="w-full">
                    <Button className="w-full bg-[#1398F9] hover:bg-[#0d7fd8]">Pagar $500.00</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Order summary */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Resumen del pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Paquete</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">Paquete Completo de Tesis</p>
                      <p className="font-medium">$500.00</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Asesoría integral para todo el proceso</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Asesor</h3>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                        <span className="text-xs font-medium">MR</span>
                      </div>
                      <div>
                        <p className="text-sm">Dr. Miguel Rodríguez</p>
                        <div className="flex items-center text-amber-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-3 h-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="ml-1 text-xs">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm">Subtotal</p>
                      <p className="font-medium">$500.00</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm">Impuestos</p>
                      <p className="font-medium">$0.00</p>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                      <p>Total</p>
                      <p className="text-[#1398F9]">$500.00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
