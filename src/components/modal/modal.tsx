import React from "react"
import { Button, Modal as RModal } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    show: boolean
    title: string
    onClose: () => void
    children?: React.ReactNode
    buttons?: React.ReactElement<typeof Button>[]
    footer?: React.ReactNode
}

export function Modal(props: Props) {
    return (
        <RModal
            show={props.show}
            onHide={props.onClose}
            size="lg"
            centered>
            <RModal.Header
                closeButton>
                <RModal.Title><strong>{props.title}</strong></RModal.Title>
            </RModal.Header>
            <RModal.Body
            >
                {props.children}
            </RModal.Body>
            <RModal.Footer
            >
                {props.footer}
            </RModal.Footer>
        </RModal>
    )
}