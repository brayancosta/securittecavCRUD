package dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import model.dao.ClienteDAO;
import model.entity.Cliente;

public class ClienteDAOTest {

	ClienteDAO dao;

	@Before
	public void init() {
		dao = ClienteDAO.getInstance();
	}
	
	
	@Test
	public void testCreate() {
		Cliente cliente = new Cliente("Fulano", "12345678909");

		try {
			dao.create(cliente);
			assert (true);
			
			
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
	
	@Test
	public void testRead() {
		List<Cliente> list;
		Cliente cliente = new Cliente("Fulano", "12345678909");
		cliente.setId(12);
		
		try {
			list = dao.read();
			assert(list.contains(cliente));
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}
	

	@Ignore
	@Test
	public void testUpdate() {
		Cliente cliente = new Cliente("Ciclano", "12345678909");
		cliente.setId(1);

		try {
			dao.update(cliente);
			assert (true);
			
		} catch (Exception e) {
			fail(e.getMessage());
		}
	}

	@Ignore
	@Test
	public void testDelete() {
		Cliente cliente = new Cliente();
		cliente.setId(6);

		try {
			dao.delete(cliente);
			assert (true);
			
		} catch (Exception e) {
			fail(e.getMessage());
		}
	
	}

}
