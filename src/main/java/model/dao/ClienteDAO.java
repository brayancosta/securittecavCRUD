package model.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import model.entity.Cliente;

public class ClienteDAO {

	private static ClienteDAO instance;
	private SessionFactory sessionFactory;
	private Session session;

	private ClienteDAO() {
		sessionFactory = new Configuration().configure().buildSessionFactory();
	}

	public static ClienteDAO getInstance() {
		if (instance == null) {
			instance = new ClienteDAO();
		}

		return instance;
	}

	public void create(Cliente cliente) throws Exception {

		session = sessionFactory.openSession();
		session.beginTransaction();

		try {
			session.persist(cliente);
			session.getTransaction().commit();
		} catch (Exception e) {
			session.getTransaction().rollback();
			e.printStackTrace();
			throw new Exception(e);
		} finally {
			session.close();
		}
	}

	public List<Cliente> read() throws Exception {
		List<Cliente> list = new ArrayList<Cliente>();

		session = sessionFactory.openSession();
		session.beginTransaction();

		try {
			list = session.createQuery("SELECT c FROM Cliente c", Cliente.class).getResultList();
			list.forEach(elem -> elem.setTelefones(null));
		} catch (Exception e) {
			session.getTransaction().rollback();
			e.printStackTrace();
			throw new Exception(e);
		} finally {
			session.close();
		}

		return list;
	}

	public void update(Cliente cliente) throws Exception {
		Cliente velho = new Cliente();
		session = sessionFactory.openSession();
		session.beginTransaction();
		
		try {
			velho = session.get(Cliente.class, cliente.getId());
			if(velho == null) {
				 throw new NullPointerException("Session did not found 'cliente' by ID " + cliente.getId());
			}
			velho.setCpf(cliente.getCpf());
			velho.setNome(cliente.getNome());
			session.merge(velho);
			session.getTransaction().commit();
		} catch (Exception e) {
			session.getTransaction().rollback();
			e.printStackTrace();
			throw new Exception(e);
		} finally {
			session.close();
		}
	}

	public void delete(Cliente cliente) throws Exception {
		Cliente c = new Cliente();
		session = sessionFactory.openSession();
		session.beginTransaction();
		
		try {
			c = session.get(Cliente.class, cliente.getId());
			if(c == null) {
				 throw new NullPointerException("Session did not found 'cliente' by ID " + cliente.getId());
			}
			session.delete(c);
			session.getTransaction().commit();
		} catch (Exception e) {
			session.getTransaction().rollback();
			e.printStackTrace();
			throw new Exception(e);
		} finally {
			session.close();
		}
	}
}
