'use client'
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const RequestMoney = () => {
    return (
        <Tabs defaultValue="amount" className="">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="amount">Request Amount</TabsTrigger>
                {/* <TabsTrigger value="password">Password</TabsTrigger> */}
            </TabsList>
            <TabsContent value="amount">
                <Card>
                    <CardHeader>
                        {/* <CardTitle>Account</CardTitle> */}
                        <CardDescription>
                            Money will be credited to your UPI ID instantly.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="amount">Amount</Label>
                            <Input id="amount" placeholder='1000' />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">UPI ID</Label>
                            <Input id="username" placeholder='mcapitol@oksbi' />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">
                            Withdraw
                        </Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            {/* <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent> */}
        </Tabs>
    )
}

export default RequestMoney

