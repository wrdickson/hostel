<div class="spacer"></div>
<div class="row">
	<div class="llPanel1">
		<div class="row">
			<div class="col-xs-12 col-sm-12">
				<h2>Prices</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 ">
				<div>
					<p class="p18">We prefer that you make a one night deposit and pay the balance in cash upon arrival. Paying in cash helps us keep prices low.</p>
				</div>
			</div>
		</div>
		{% if config.showWinterRates == "true" %}
			<div class="row">
				<div class="col-xs-12 col-sm-12 ">
					<div class="backgroundWhite" style="padding: 4px; padding-top: 14px; max-width: 570px; margin-bottom: 7px;">
						<h3 class="winterText">Winter rates run from December through February.</h3>
					</div>
				</div>
			</div>
		{% endif %}
		<div class="row">
			<div class="col-xs-12 col-sm-12 ">
				<div>
					<h3>Dormitory Beds</h3>
					<div  class="backgroundWhite" style="padding:4px; max-width: 270px;">
						<p class="p18b">
							{% if config.showWinterRates == "true" %}
							Summer:
							{% endif %}
							${{config.rates.dorm_s}}
						</p>
						{% if config.showWinterRates == "true" %}
							<p class="p18b winterText">Winter: ${{config.rates.dorm_w}}</p>
						{% endif %}
						
					</div>
				</div>
			</div>
		</div>
		<div class="spacer"></div>
		<div class="row">
			<div class="col-xs-12">
				<div>
					<div class="spacer"></div>				
					<h3>Private Rooms</h3>
					<div class="table-responsive">
						<table class="pricesTable table-bordered table ">
							<thead>
								<tr class="backgroundGrey">
									<th>People:</th>
									<th>1</th>
									<th>2</th>
									<th>3</th>
									<th>4</th>
									<th>5</th>
									<th>6</th>
								</tr>
							</thead>
							<tbody>
								<tr class="backgroundWhite">
									<td>Rate:</td>
									<td>${{config.rates.room.p1_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter:<br/>${{config.rates.room.p1_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.room.p2_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter:<br/>${{config.rates.room.p2_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.room.p3_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter:<br/>${{config.rates.room.p3_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.room.p4_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter:<br/>${{config.rates.room.p4_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.room.p5_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter:<br/>${{config.rates.room.p5_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.room.p6_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter:<br/>${{config.rates.room.p6_w}}</span>
										{% endif %}
                                    </td>
								</tr>
							</tbody>	
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 ">
				<div>
					<h3>Cabins:</h3>
						<div class="table-responsive">
							<table class="pricesTable table table-bordered">
								<thead>
									<tr class="backgroundGrey">
										<td>People:</td>
										<td>1</td>
										<td>2 - One bed</td>
										<td>2 - Two beds</td>
										<td>3</td>
										<td>4</td>
										<td>5</td>
										<td>6</td>
									</tr>
								</thead>
								<tbody>
									<tr class="backgroundWhite">
										<td>Rate:</td>
										<td>${{config.rates.cabin.p1b1_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p1b1_w}}</span>
											{% endif %}
										</td>
										<td>${{config.rates.cabin.p2b1_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p2b1_w}}</span>
											{% endif %}
										</td>
										<td>${{config.rates.cabin.p2b2_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p2b2_w}}</span>
											{% endif %}
										</td>
										<td>${{config.rates.cabin.p3_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p3_w}}</span>
											{% endif %}
										</td>
										<td>${{config.rates.cabin.p4_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p4_w}}</span>
											{% endif %}
										</td>
										<td>${{config.rates.cabin.p5_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p5_w}}</span>
											{% endif %}
										</td>
										<td>${{config.rates.cabin.p6_s}}
											{% if config.showWinterRates == "true" %}
												<br/><span class="winterText">Winter:<br/>${{config.rates.cabin.p6_w}}</span>
											{% endif %}
										</td>
									</tr>					
								</tbody>	
							</table>			
					</div>
				</div>	
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12">
				<div>
					<h3>Group Houses:</h3>
					<div class="table-responsive">
						<table class="pricesTable table table-bordered">
							<thead>
								<tr class="backgroundGrey">
									<td>House:</td>
									<td>Upper Watermelon House</td>
									<td>Lower Watermelon House</td>
									<td>Upper & Lower Watermelon House</td>
									<td>Gramma's House</td>
									<td>La Casa</td>
								</tr>
							</thead>
							<tbody>
								<tr class="backgroundWhite">
									<td>Rate:</td>
									<td>${{config.rates.house.wm_upper_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter: ${{config.rates.house.wm_upper_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.house.wm_lower_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter: ${{config.rates.house.wm_lower_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.house.wm_whole_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter: ${{config.rates.house.wm_whole_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.house.grammas_s}}
										{% if config.showWinterRates == "true" %}
											<br/><span class="winterText">Winter: ${{config.rates.house.grammas_w}}</span>
										{% endif %}
									</td>
									<td>${{config.rates.house.lacasa_s}}</td>
								</tr>
							</tbody>			
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

