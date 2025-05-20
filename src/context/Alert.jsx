import React from 'react'
import { useAlertContext } from './AlertContext'

const Alert = () => {
    const { alertData } = useAlertContext();
    return (
        <div className={`alert alert-${alertData.type}`}>
            {alertData.message}
        </div>
    )
}

export default Alert;
