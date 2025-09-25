import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const maxTimer = 3000;
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("TIMER SET");
      onConfirm();
      
    }, maxTimer);
    return () => {
      console.log("TIMER CLEAN UP");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={maxTimer}/>
    </div>
  );
}
