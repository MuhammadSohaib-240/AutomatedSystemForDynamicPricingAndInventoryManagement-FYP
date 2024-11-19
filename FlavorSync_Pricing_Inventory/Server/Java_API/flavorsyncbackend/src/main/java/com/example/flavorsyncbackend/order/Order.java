package com.example.flavorsyncbackend.order;

import com.example.flavorsyncbackend.orderitem.OrderItem;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_type", nullable = false)
    private String orderType;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private List<OrderItem> orderItems;

    @Column(name = "total_price", nullable = false)
    private Double totalPrice;

    @Column(name = "order_status", nullable = false)
    private String orderStatus;

    @Column(name = "special_requests")
    private String specialRequests;

    @Column(name = "order_time", nullable = false)
    private LocalDateTime orderTime;

    @Column(name = "payment_status", nullable = false)
    private String paymentStatus;
}