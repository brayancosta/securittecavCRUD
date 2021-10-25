package conn;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import org.junit.Test;
import static org.junit.Assert.*;

public class HibernateTest {

	@Test
	public void checkSession() {
		SessionFactory sessionFactory;

		sessionFactory =  new Configuration().configure().buildSessionFactory(); 
		Session session = sessionFactory.openSession();
		
		try {
			assert (session.isConnected());
			assert (session.isOpen());
		} catch(Exception e) {
			fail(e.getMessage());
		}
		finally {
		
			session.close();
		}
	}

}
