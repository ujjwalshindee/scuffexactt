import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

const RepayDebt = () => {
  return (
    <Tabs defaultValue="extend-debt" className="w-[400px]">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="extend-debt">Extend Debt</TabsTrigger>
      <TabsTrigger value="clear-debt">Clear Debt</TabsTrigger>
    </TabsList>
    <TabsContent value="extend-debt">
      <Card>
        <CardHeader>
          <CardDescription>
          Please note that a 10% fee applies for extending this debt by 30 days. The extension will be processed once your payment is confirmed.
          </CardDescription>
        </CardHeader>
        <CardFooter>
        <Button variant={'outline'}>Proceed to Pay</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="clear-debt">
      <Card>
        <CardHeader>
          <CardDescription>
          Your debt will be finalized once we confirm your payment.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant={'outline'}>Proceed to Pay</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
  )
}

export default RepayDebt