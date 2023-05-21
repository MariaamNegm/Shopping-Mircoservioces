package com.example.demotrial.customer;



import jakarta.ejb.MessageDriven;


import jakarta.jms.*;


import jakarta.persistence.*;



import java.util.List;
@MessageDriven(
        activationConfig = {
                @jakarta.ejb.ActivationConfigProperty(propertyName = "destinationType", propertyValue = "jakarta.jms.Queue"),
                @jakarta.ejb.ActivationConfigProperty(propertyName = "destination", propertyValue = "java:/jms/queue/orderqueue")
        },
        mappedName = "java:/jms/queue/orderqueue", name = "shippingcompanyservice")
public class shippingcompanyservice  implements MessageListener  {
    private  final EntityManagerFactory emf = Persistence.createEntityManagerFactory("customer");
    private EntityManager em = emf.createEntityManager();
    public void onMessage(Message message) {
        try {
            String orderRequest = message.getBody(String.class);
            System.out.println("Received message: " + orderRequest);
        } catch (JMSException e) {
            e.printStackTrace();
 }
    }

    public String confirmorder(int order_id)   {
        order cs= em.find(order.class,order_id);
        customer c = em.find(customer.class,cs.getCustomer().getId());
        String loctaion_l=c.getLocation();
        TypedQuery<location> query=  em.createQuery("SELECT u FROM location u where u.name=:location_l", location.class) ;
        query.setParameter("location_l",loctaion_l);
        location j = query.getSingleResult();
        shippingcompany ship=j.getCompany();
        cs.setShip(ship);
        ship.orders.add(cs);
        notifications n1 = new notifications();
        n1.setCustomer(c);
        cs.setShippied(true);
        n1.setMessage("Dear Customer , "+c.getUsername()+" So happy to notify you that your order "+cs.getName()+" is on the way by "+ship.getName()+" shipping company");
        em.getTransaction().begin();
        em.persist(n1);
        em.getTransaction().commit();
        c.notificationsSet.add(n1);
        cs.setShippied(true);
        return "Order Confirmed Successfully , please Check out your notifications";
    }




    public String addShipCompany(shippingcompany s) {


    em.getTransaction().begin();

    em.persist(s);

    em.getTransaction().commit();


    return "Shipping Company added ";
}


    public List<shippingcompany> getallshipcompanies()
    {
        TypedQuery< shippingcompany> query = em.createQuery("SELECT u FROM shippingcompany u",shippingcompany.class);
        List< shippingcompany> ship = query.getResultList();
        return ship;
    }
    public List<location> getalllocations(int company_id)
    {
        TypedQuery<location> query = em.createQuery("SELECT u FROM location u where u.company.id=:company_id",location.class);
        query.setParameter("company_id",company_id);
        List<location> locations = query.getResultList();
        return locations;
    }

    public String addlocation(int name, location l)
    {

        Query q=em.createQuery("SELECT e from shippingcompany e where e.id =:nam");
        q.setParameter("nam", name);
         shippingcompany r=( shippingcompany) q.getSingleResult();
        r.locations.add(l);
        shippingcompany v = em.find(shippingcompany.class,name);
        l.setCompany(v);

        em.getTransaction().begin();

        em.persist(l);

        em.getTransaction().commit();



        return "location added successfully";


    }



}
