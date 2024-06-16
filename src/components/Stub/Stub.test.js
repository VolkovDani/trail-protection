import { render, screen } from '@testing-library/react';
import Stub from './Stub';


test('renders cooking trail protection', async () => {
  render(<Stub />);
  const textElement = screen.getByText(/Cooking Trail Protection/i);
  const linkElements = screen.getByText(/Группа ВКонтакте/i);
  expect(textElement).toBeInTheDocument();
  expect(linkElements).toBeInTheDocument();

});
