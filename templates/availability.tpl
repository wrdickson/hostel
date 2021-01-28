<div id="availabilityModal" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		<h4 id="availabilityModalTitle" class="modal-title"></h4>
      </div>
      <div id="availabilityModalContent" class="modal-body">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<div class="spacer"></div>
<div class="row llPanel">
	<div class="col-xs-12">
			<h2>Reservations</h2>
			<p><b>Complete the fields below to check availibility by email. You should hear back within 24 hours. If the reservation you are requesting is available, you will be able to reserve and pay a deposit online. Please, no reservations will be made more than 6 months in advance.</b></p>
			<p><b>Note: If the dates you are reserving are less than 48 hours away, please call.</b></p>
	</div>
</div>
<div id="availabilityFormWrapper" class="row llPanel">

	<div class="row">
		<div class="col-xs-12 text-center">
			<button class="resetBtn btn btn-danger" type="button" ><b>Reset Form</b></button>
			<div class="spacer"></div>
		</div>
	</div>
	<noscript>
		<div class="row">
			<div class="col-xs-12">
        <div class="panel panel-default">
            <div class="panel-body"  style="background-color:#ff2626; color: #000 !important;">
				      <h3>Javascript is disabled on this browser window.</h3><h3><b>You must have javascript enabled to use this form.</b></h3>
            </div>
        </div>
      </div>
		</div>
	</noscript>
	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div id="dateContainer" class="panel panel-default panel-primary">
				<div class="panel-heading "><p class="p18"><b>Step 1/4:</b> Arrival and Departure Dates</p></div>
				<div class="panel-body">
					<p style="font-size: .85em">*Dates have to make sense</p>
					<div class="input-daterange input-group" id="datepicker">
						<input id="aDate" type="text" class="form-control date-input" name="start" />
						<span class="input-group-addon">to</span>
						<input id="dDate" type="text" class="form-control date-input" name="end" />
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="typeSelectPanel hidden panel panel-default panel-primary">
				<div class="panel-heading"><p class="p18"><b>Step 2/4:</b> Select Accomodation Type</p></div>
				<div class="panel-body">
					<p style="font-size: .85em">*Dorm, cabin, room, or house</p>
					<select id="typeSelect" class=" form-control">
						<option value="ch">Choose:</option>
						<option value="d">Dorm</option>						
						<option value="pr">Private Room</option>
						<option value ="c">Cabin</option>
						<option value="gh">Group House</option>
					</select>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div id="dormOptions" class="typeSelectSubpanel hidden col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="panel panel-default panel-primary">
				<div class="panel-heading"><p class="p18"><b>Step 3/4:</b> Number of people per dorm type</p></div>
				<div class="panel-body">
					<p style="font-size: .85em">*At least one of these has to be one or more.</p>				
					<label for="femaleDorm">Female Only dorm:</label>
					<select id="femaleDorm" class="dormSelect dormSelectFemale form-control ">
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<label for="maleDorm">Male Only dorm:</label>
					<select id="maleDorm" class="dormSelect dormSelectMale form-control ">
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<label for="coedDorm">Coed dorm:</label>
					<select id="coedDorm" class="dormSelect dormSelectCoed form-control ">
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
				</div>
			</div>
		</div>
		<div id="roomOptions" class="typeSelectSubpanel hidden col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="panel panel-default panel-primary">
				<div class="panel-heading"><p class="p18"><b>Step 3/4:</b> Enter Room Details</p></div>
				<div class="panel-body">
					<div class="panel panel-default">
						<div class="panel-body">

							<label for="privateRoomQuantity">Number of rooms:</label>
							<select id="privateRoomQuantity" class="form-control ">
								<option value="1" selected>1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
							<p style="font-size: .85em">*Number of people and beds must be selected for each room</p>							
							<div class="roomDetail roomDetail1">
								<hr/>
								<h4>First Room:</h4>
								<label for="numberPplRm1">People in room:</label>
								<select id="numberPplRm1" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsRm1">Beds Needed:</label>
								<select id="numberBedsRm1" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div class="roomDetail roomDetail2 roomDetailSub hidden">
								<hr/>
								<h4>Second Room:</h4>
								<label for="numberPplRm2">People in room:</label>
								<select id="numberPplRm2" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsRm2">Beds Needed:</label>
								<select id="numberBedsRm2" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div class="roomDetail roomDetail3 roomDetailSub hidden">
								<hr/>
								<h4>Third Room:</h4>
								<label for="numberPplRm3">People in room:</label>
								<select id="numberPplRm3" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsRm3">Beds Needed:</label>
								<select id="numberBedsRm3" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>

							<div class="roomDetail roomDetail4 roomDetailSub hidden">
								<hr/>							
								<h4>Fourth Room:</h4>
								<label for="numberPplRm4">People in room:</label>
								<select id="numberPplRm4" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsRm4">Beds Needed:</label>
								<select id="numberBedsRm4" class="roomSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="cabinOptions" class="typeSelectSubpanel hidden col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="panel panel-default panel-primary">
				<div class="panel-heading"><p class="p18"><b>Step 3/4:</b> Enter Cabin Details</p></div>
				<div class="panel-body">
					<div class="panel panel-default">
						<div class="panel-body">
							<label for="privateCabinQuantity">Number of cabins:</label>
							<select id="privateCabinQuantity" class="form-control ">
								<option value="1" selected>1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
							<p style="font-size: .85em">*Number of people and beds must be selected for each cabin</p>							
							<div class="cabinDetail cabinDetail1">
								<hr/>
								<h4>First cabin:</h4>
								<label for="numberPplCbn1">People in cabin:</label>
								<select id="numberPplCbn1" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsCbn1">Beds Needed:</label>
								<select id="numberBedsCbn1" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>

							<div class="cabinDetail cabinDetail2 cabinDetailSub hidden">
								<hr/>
								<h4>Second cabin:</h4>
								<label for="numberPplCbn2">People in cabin:</label>
								<select id="numberPplCbn2" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsCbn2">Beds Needed:</label>
								<select id="numberBedsCbn2" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div class="cabinDetail cabinDetail3 cabinDetailSub hidden">
								<hr/>
								<h4>Third cabin:</h4>
								<label for="numberPplCbn3">People in cabin:</label>
								<select id="numberPplCbn3" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsCbn3">Beds Needed:</label>
								<select id="numberBedsCbn3" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
							<div class="cabinDetail cabinDetail4 cabinDetailSub hidden">
								<hr/>
								<h4>Fourth cabin:</h4>
								<label for="numberPplCbn4">People in cabin:</label>
								<select id="numberPplCbn4" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
								<label for="numberBedsCbn4">Beds Needed:</label>
								<select id="numberBedsCbn4" class="cabinSelect form-control ">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="guestHouseOptions" class="typeSelectSubpanel hidden col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="panel panel-default panel-primary">
				<div class="panel-heading"><p class="p18">Group House Details</div>
				<div class="panel-body">
					<form class="guestHouseSelect">
						<label>Select which house(s) you are interested in renting:</label><br/>
						<input class="houseCBox" type="checkbox" name="houseName" value="La Casa">&nbsp;&nbsp;La Casa<br/><br/>
						<input class="houseCBox" type="checkbox" name="houseName" value="Grammas House">&nbsp;&nbsp;Gramma's House<br/><br/>
						<input class="houseCBox" type="checkbox" name="houseName" value="Watermelon Upper">&nbsp;&nbsp;Watermelon House - Upper Level<br/><br/>
						<input class="houseCBox" type="checkbox" name="houseName" value="Watermelon Lower">&nbsp;&nbsp;Watermelon House - Lower Level<br/><br/>
						<input class="houseCBox" type="checkbox" name="houseName" value="Watermelon All">&nbsp;&nbsp;Watermelon House - Whole House<br/><br/>
					</form>
				</div>
			</div>
		</div>
		<div class="requestInfoPanel hidden col-xs-12 col-sm-6 col-md-6 col-lg-6">
			<div class="panel panel-default panel-primary">
				<div class="panel-heading">
					<p class="p18"><b>Step 4/4:</b> Request Availability</p>
				</div>
				<div class="panel-body">
					<label for="llFirstName">First Name:&nbsp;&nbsp;&nbsp;<span style="font-size: .85em">*Letters, numbers, space and dash only</span></label>
					<input id="llFirstName" type="text" class="requestInfoPanel form-control"/>
					<label for="llLastName">Last Name:&nbsp;&nbsp;&nbsp;<span style="font-size: .85em">*Letters, numbers, space and dash only</span></label>
					<input id="llLastName" type="text" class="requestInfoPanel form-control"/>
					<label for="llEmail">Email:</label>
					<input id="llEmail" type="text" class="requestInfoPanel form-control"/>
					<label for="llComments">Comments/ requests:</label>
					<textarea id="llComments"  class="requestInfoPanel form-control"></textarea>
					<div class="captcha-box">
						<label for="captcha">Show us you're not a robot:</label><br/>
						<span id="captcha">
							<img src="api/captcha/">
						</span>
						<button type="button" class="btn btn-default " id="refreshCaptcha">reload <span id="refreshCaptchaBtn" class="fa fa-refresh" aria-hidden="true"></span></button>
						<br/>
						<label for="recaptchaInput">Enter the text from the image</label>
						<input type="text" id="recaptchaInput" class="requestInfoPanel form-control"/><br/>
					</div>
					<div id="requestError"></div>
					<button id = "btnRequest" type="button" class="btn btn-lg btn-success">Request Availability<span id="requestBtnSpinner"></span></button>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 text-center">
			<div class="spacer"></div>
			<button class="resetBtn btn btn-danger" type="button"><b>Reset Form</b></button>
			<div class="spacer"></div>
		</div>
	</div>
</div>
