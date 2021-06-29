import renderWithRoute from './renderWithRoute';
import App from '../App';


describe('render the Login form', () => {
  it('should renders `crie sua conta`', () => {
    const { getByText, history } = renderWithRoute(<App />);

    history.push('/');
    const salas = getByText(/salas/i);
    const paragrapy = getByText(/ao-vivo/i)
    expect(salas).toBeInTheDocument();
    expect(paragrapy).toBeInTheDocument();
  });

  it('should renders a input type email', () => {
    
  })

})
