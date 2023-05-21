package com.example.demotrial.customer;

import jakarta.annotation.Resource;
import jakarta.ejb.Stateful;
import jakarta.enterprise.context.SessionScoped;

import jakarta.jms.*;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import jakarta.persistence.TypedQuery;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@Stateful
@SessionScoped
public class customerservice implements Serializable {

    private  final EntityManagerFactory emf = Persistence.createEntityManagerFactory("customer");
    private EntityManager em = emf.createEntityManager();


    @Resource(mappedName = "java:/jms/queue/orderqueue")
    private Queue  queue;


    public String addcustomer(customer c)  {

        em.getTransaction().begin();

        em.persist(c);

        em.getTransaction().commit();

        return "Customer added ";
    }


    public List<customer> getcustomers()
    {
        TypedQuery<customer> query = em.createQuery("SELECT u FROM customer u", customer.class);
        List<customer> customers = query.getResultList();
        return customers;
    }
    public List<notifications> getnotifications(int id)
    {
        TypedQuery<notifications> query = em.createQuery("SELECT u FROM notifications u where u.customer.id=:id", notifications.class);
        query.setParameter("id",id);
        List<notifications> notifications = query.getResultList();
        return  notifications;
    }

    public String login( customer c) {
        String username=c.getUsername();
        String password = c.getPassword();
        TypedQuery<customer> query = em.createQuery("SELECT u FROM  customer u WHERE u.username=:username AND u.password=:password",  customer.class);
        query.setParameter("username", username);
        query.setParameter("password", password);

        List<customer> users = query.getResultList();
        if(!users.isEmpty()) {
            users.get(0).login(users.get(0));

            return "logged in Successfully";
        }
        else return "username not found";

    }

    public List<order> getallcurrentorders(int customer_id)
    {

        TypedQuery<order> query = em.createQuery("SELECT u FROM order u WHERE u.customer1.id=:customer_id AND u.shippied=false ",order.class);
        query.setParameter("customer_id",  customer_id);
        List<order>  orderList = query.getResultList();
        return orderList;
    }


    public List<order> getallpastorders(int customer_id)
    {

        TypedQuery<order> query = em.createQuery("SELECT u FROM order u WHERE u.customer1.id=:customer_id AND u.shippied=true",order.class);
        query.setParameter("customer_id",  customer_id);
        List<order>orderList = query.getResultList();
        return orderList;
    }
    public List<order> getallorders()
    {

        return  em.createQuery("SELECT u FROM order u",order.class).getResultList();


    }
    public List<order> getallordersbyid(int customer_id)
    {

       TypedQuery<order> query=  em.createQuery("SELECT u FROM order u where u.customer1.id=:customer_id",order.class) ;
       query.setParameter("customer_id",customer_id);
       return query.getResultList();

    }

    public String createorder(order c,int id)  {
        customer cs= em.find(customer.class,id);
        c.setCustomer(cs);
        cs.orders.add(c);

        em.getTransaction().begin();

        em.persist(c);

        em.getTransaction().commit();

        return "order added and ready for products  ";
    }

    public String addproduct(int order_id,int product_id) {
        order r = em.find(order.class,order_id);
        product p = em.find(product.class,product_id);
        if(p.getQuantity()==0)
        {
            return "Sorry, Product sold out !";
        }
        else
        p.addorder(r);
        r.addpro(p);
        if(p.getQuantity()==0)
        {
            // add to sold out after modifications
            p.soldout(p);
        }
        return "product with id :"+product_id+" and name :"+p.getName()+" added to order with id "+order_id+"and name "+r.getName()+" Successfully";
        }

    public String confirmorder(int order_id) throws IOException, NamingException, JMSException {


        URL url = new URL("http://localhost:8080/demotrial-1.0-SNAPSHOT/api/shipping/confirmorder/"+order_id);
        Context context = new InitialContext();
        ConnectionFactory connectionFactory = (ConnectionFactory) context.lookup("java:/ConnectionFactory");
        Connection connection1 = connectionFactory.createConnection();
        Session session = connection1.createSession(false, Session.AUTO_ACKNOWLEDGE);
        MessageProducer producer = session.createProducer(this.queue);
        ObjectMessage message = session.createObjectMessage();
        message.setObject("Order Confirmed Successfully , please Check out your notifications");
        producer.send(message);
        session.close();
        connection1.close();
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("User-Agent", "MyHttpClient/1.0");
        connection.setRequestProperty("Content-Type", "application/json");

        String requestBody = "{ }";
        connection.setDoOutput(true);
        DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream());
        outputStream.writeBytes(requestBody);
        outputStream.flush();
        outputStream.close();

        int statusCode = connection.getResponseCode();
        System.out.println("Status code: " + statusCode);

        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder responseBody = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            responseBody.append(inputLine);
        }
        in.close();

        return responseBody.toString();


    }
    public String logout(int id) {
         customer s = em.find( customer.class,id);
        s.logout();
        return "logged out Successfully";

    }




}
