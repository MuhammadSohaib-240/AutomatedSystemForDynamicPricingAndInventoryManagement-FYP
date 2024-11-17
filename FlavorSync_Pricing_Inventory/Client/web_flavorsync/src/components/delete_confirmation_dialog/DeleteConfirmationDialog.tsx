import Card from "../cards/Card";
import "./DeleteConfirmationDialog.scss";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  isOpen,
  onCancel,
  onDelete,
}) => {
  if (!isOpen) return null;

  return (
    <div className="confirmation-dialog-overlay">
      <Card>
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this user?</p>
          <div className="actions">
            <button onClick={onDelete}>Delete</button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DeleteConfirmationDialog;
