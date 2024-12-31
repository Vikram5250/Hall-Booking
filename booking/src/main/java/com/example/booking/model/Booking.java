package com.example.booking.model;

import jakarta.persistence.*;


import java.util.Date;


@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mobileNo;
    private String hallName;
    private String applicantName;
    private String email;
    private String purposeOfUse;
    private Double rent;
    private Double additionalCharges;
    private Double total;
    private String remark;

    // Default constructor
    public Booking() {}

    // Constructor with all fields (optional)
    public Booking(Long id, String mobileNo, String hallName, String applicantName, String email, String purposeOfUse,
                   Double rent, Double additionalCharges, Double total, String remark, String receiptNo, Date receiptDate) {
        this.id = id;
        this.mobileNo = mobileNo;
        this.hallName = hallName;
        this.applicantName = applicantName;
        this.email = email;
        this.purposeOfUse = purposeOfUse;
        this.rent = rent;
        this.additionalCharges = additionalCharges;
        this.total = total;
        this.remark = remark;
    }

    // Getter and Setter for id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and Setter for mobileNo
    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    // Getter and Setter for hallName
    public String getHallName() {
        return hallName;
    }

    public void setHallName(String hallName) {
        this.hallName = hallName;
    }

    // Getter and Setter for applicantName
    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    // Getter and Setter for email
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Getter and Setter for purposeOfUse
    public String getPurposeOfUse() {
        return purposeOfUse;
    }

    public void setPurposeOfUse(String purposeOfUse) {
        this.purposeOfUse = purposeOfUse;
    }

    // Getter and Setter for rent
    public Double getRent() {
        return rent;
    }

    public void setRent(Double rent) {
        this.rent = rent;
    }

    // Getter and Setter for additionalCharges
    public Double getAdditionalCharges() {
        return additionalCharges;
    }

    public void setAdditionalCharges(Double additionalCharges) {
        this.additionalCharges = additionalCharges;
    }

    // Getter and Setter for total
    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    // Getter and Setter for remark
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
