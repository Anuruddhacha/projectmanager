package com.primex.primexprojects.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaymentLinkResponse {
    private String payment_link_id;
    private String getPayment_link_url;
}
