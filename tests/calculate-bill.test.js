describe("calculate-bill unit test", function() {
  
    it("should return the total cost of added calls and sms's", function() {
        var calculatePhoneBill = CalculateBill();
        calculatePhoneBill.setCallCost(2.75)
        assert.equal(2.75, calculatePhoneBill.getCallCost())

         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();

      assert.equal(9, calculatePhoneBill.totalCost);
      assert.equal(8.25, calCulatePhoneBill.totalCallCost);
      assert.equal(0.75, calculatePhoneBill.totalSmsCost);
    });

    it("should return the total cost of added calls and sms's and alert warning", function() {
        var calculatePhoneBill = CalculateBill()
        calculatePhoneBill.setCallCost(2.75)
        assert.equal(2.75, calculatePhoneBill.getCallCost())

         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.sendSms();

      assert.equal(20.75, calculatePhoneBill.totalCost);
      assert.equal(19.25, calCulatePhoneBill.totalCallCost);
      assert.equal(1.50, calculatePhoneBill.totalSmsCost);
      assert.equal('warning', calculatePhoneBill.alertColor);
    });

    it("should return the total cost of calls and sms's and alert danger", function() {

        var calculatePhoneBill = CalculateBill()
        calculatePhoneBill.setCallCost(2.75)
        assert.equal(2.75, calculatePhoneBill.getCallCost())

         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.sendSms();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();
         calculatePhoneBill.makeCall();

      assert.equal(30.50, calculatePhoneBill.totalCost);
      assert.equal(27.50, calCulatePhoneBill.totalCallCost);
      assert.equal(3.00, calculatePhoneBill.totalSmsCost);
      assert.equal('danger', calculatePhoneBill.alertColor);
    });
  });