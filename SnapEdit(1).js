/*
 * SnapEdit Pro Unlock
 * Shadowrocket Module
 */

var objc = JSON.parse($response.body);

objc = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 1490078804,
    "bundle_id": "com.sfun.snapedit",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1725353630000",
        "expires_date": "2099-09-09 08:53:50 Etc/GMT",
        "is_in_intro_offer_period": "true",
        "transaction_id": "220002179016924",
        "is_trial_period": "true",
        "original_transaction_id": "220002179016924",
        "product_id": "se_premium_yearly_2499_7d0_b", // Thay bằng product_id của bạn
        "expires_date_ms": "4092595200000"
      }
    ],
    "adam_id": 1490078804,
    "application_version": "190",
    "original_application_version": "190"
  },
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "expires_date": "2099-09-09 08:53:50 Etc/GMT",
      "transaction_id": "220002179016924",
      "is_trial_period": "true",
      "product_id": "se_premium_yearly_2499_7d0_b", // Thay bằng product_id của bạn
      "expires_date_ms": "4092595200000"
    }
  ],
  "latest_receipt": "MIIUoQYJKoZIhvcNAQcCoIIUkjCCFI4CAQEx..."
};

$done({body: JSON.stringify(objc)});