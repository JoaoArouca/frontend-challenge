import { Button } from '@frontend-challenge/ui/components/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@frontend-challenge/ui/components/dialog'

type ConfirmDialogProps = {
  open: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export const ConfirmDialog = ({
  open,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <p>{message}</p>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Excluir
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
