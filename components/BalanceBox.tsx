import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'

const BalanceBox = () => {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Current Credit Balance</AlertTitle>
            <AlertDescription>
            ₹1000
            </AlertDescription>
        </Alert>

    )
}

export default BalanceBox