import { fireEvent, render, screen } from "@testing-library/react";
import Count from "../component/Count";

test('increase count', () => {
    render(<Count />);
    fireEvent.click(screen.getByText(/Increase/i));
    expect(screen.getByText(/Count\s*:\s*1/i)).toBeInTheDocument();
})